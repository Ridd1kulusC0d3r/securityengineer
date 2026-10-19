# PR na fronteira de confiança

Exercício sintético de decisão, sem execução em sistemas.

Um workflow executa código de uma contribuição externa.

## Evidências
- E1: Workflow: usa pull_request_target e token com escrita.
- E2: Passo: checkout do head do PR e execução de script desse checkout.
- E3: Job: disponibiliza segredo usado na publicação.

## Decisão
1. Separar validação não privilegiada da publicação e impedir execução do PR com segredos.
2. Somente renomear o segredo.
3. Confiar porque o workflow pertence ao repositório principal.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 1. O contexto privilegiado executa entrada não confiável. A correção deve quebrar esse caminho, não apenas alterar nomes ou ocultar logs.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
