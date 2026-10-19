# Regra correta, campo errado

Exercício sintético de decisão, sem execução em sistemas.

Uma regra convertida nunca dispara.

## Evidências
- E1: Regra: compara Image com um caminho de executável.
- E2: Evento: o pipeline armazena o campo como process.executable.
- E3: Fixture: comportamento esperado aparece em eventos coletados.

## Decisão
1. Ajustar o mapeamento e testar casos positivos e negativos.
2. Reduzir a severidade do alerta.
3. Concluir que o ambiente está protegido.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 1. A lógica depende do esquema real. Corrija o mapeamento, preserve a semântica e valide os eventos benignos antes de publicar.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
