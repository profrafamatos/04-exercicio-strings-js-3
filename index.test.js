//Não faça nada neste arquivo, esqueça que ele existe
const { execSync } = require('child_process');

test('verifica a concatenação correta usando concat()', () => {
  const output = execSync('node index.js').toString();
  const expectedOutput = "Aprender Javascript é divertido!";
  expect(output.trim()).toBe(expectedOutput);
});
