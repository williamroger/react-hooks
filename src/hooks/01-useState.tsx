import { Button } from "@/components/ui/button";
import { useState } from "react";

function Form() {
  const [name, setName] = useState('Michael');

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-cyan-800 mb-2"
      />
      <p>Hello <strong>{name}</strong>, how are you?</p>
    </>
  )
}

export function UseState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('Carol');
  const [age, setAge] = useState(18);
  const [yourAge, setYourAge] = useState(42);
  const [yourAgeNextState, setYourAgeNextState] = useState(42);
  const [version, setVersion] = useState(1);

  function handleCount() {
    setCount(count + 1);
  }

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function handleResetText() {
    setText('Hello');
  }

  function handleToggleCheck(e) {
    setChecked(e.target.checked);
  }

  function incrementYourAge() {
    setYourAge(y => y + 1);
  }

  function incrementYourAgeNextState() {
    setYourAgeNextState(yourAgeNextState + 1);
  }

  return (
    <div>
      <h1 className="text-4xl mb-6">Exemplos básicos de useState</h1>

      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Exemplo 1: Contador (número)</h2>
          <p>Neste exemplo, a countvariável de estado armazena um número. Clicar no botão incrementa esse número.</p>
        </div>
        <Button onClick={handleCount}>
          O botão foi pressionado {count} vezes
        </Button>
      </div>

      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Exemplo 2: Campo de texto</h2>
          <p>Neste exemplo, a textvariável de estado armazena uma string. Quando você digita, o handleChangesistema lê o último valor inserido no elemento DOM de entrada do navegador e chama a função setTextpara atualizar o estado. Isso permite exibir o valor atual textabaixo.</p>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChangeText(e)}
          className="w-full border border-cyan-800 mb-2"
        />
        <Button onClick={handleResetText}>
          Reset text
        </Button>
      </div>

      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Exemplo 3: Caixa de seleção (booleana)</h2>
          <p>Neste exemplo, a likedvariável de estado armazena um valor booleano. Ao clicar no campo de entrada, setLikeda likedvariável de estado é atualizada indicando se a caixa de seleção do navegador está marcada ou não. Essa likedvariável é usada para renderizar o texto abaixo da caixa de seleção.</p>
        </div>
        <label htmlFor="like" className="">
          <input
            id="like"
            type="checkbox"
            checked={checked}
            onChange={(e) => handleToggleCheck(e)}
            className="mr-1"
          />
          Eu gosto disso
        </label>
        <p>Você {checked ? 'gosta' : 'não gosta'} disso.</p>
      </div>

      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Exemplo 4: Forma (duas variáveis)</h2>
          <p>Você pode declarar mais de uma variável de estado no mesmo componente. Cada variável de estado é completamente independente.</p>
        </div>

        <input
          id="like"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-cyan-800 mb-2"
        />
        <Button className="mb-2" onClick={() => setAge(age + 1)}>
          Adicionar + 1 ano
         </Button>
        <p>Olá meu nome é <strong>{name}</strong> eu tenho <strong>{age}</strong> anos.</p>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl mb-6">A diferença entre passar um atualizador e passar o próximo estado diretamente</h1>
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Exemplo 5: Passando a função de atualização</h2>
          <p>Este exemplo passa na função de atualização, portanto o botão “+3” funciona.</p>
        </div>
        <p className="mb-4">Sua idade é: <strong>{yourAge}</strong></p>

        <Button className="mb-2" onClick={() => {
          incrementYourAge();
          incrementYourAge();
          incrementYourAge();
        }}>
          +3
         </Button>
        <Button onClick={() => {
          incrementYourAge();
        }}>
          +1
        </Button>

        <div className="mb-8 mt-4">
          <h2 className="text-2xl mb-2">Exemplo 5: Passando a função de atualização</h2>
          <p>Este exemplo passa na função de atualização, portanto o botão “+3” funciona.</p>
        </div>
        <p className="mb-4">Sua idade é: <strong>{yourAgeNextState}</strong></p>

        <Button className="mb-2" onClick={() => {
          incrementYourAgeNextState();
          incrementYourAgeNextState();
          incrementYourAgeNextState();
        }}>
          +3
         </Button>
        <Button onClick={() => {
          incrementYourAgeNextState();
        }}>
          +1
        </Button>
      </div>

      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Exemplo 6: Redefinir estado com o atributo key</h2>
          <p>Quando o botão “Reset” é pressionado o valor do estado version muda e o React recria o componente Form (e todos os seus filhos) do zero, portanto, seu estado é redefinido.</p>
        </div>

        <Form key={version} />
        <Button className="mb-2" onClick={() => setVersion(v => v +1)}>
          Reset
         </Button>
      </div>
    </div>
  )
}
