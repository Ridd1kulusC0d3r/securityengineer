# O objeto de outra pessoa

Exercício sintético de decisão, sem execução em sistemas.

Uma API retorna faturas pelo identificador.

## Evidências
- E1: Usuário A recebe sua fatura em /invoices/41.
- E2: Usuário A também recebe a fatura de B em /invoices/42.
- E3: Servidor: autentica o token, mas não verifica vínculo com a fatura.

## Decisão
1. Ocultar IDs no frontend.
2. Trocar IDs numéricos por UUID e encerrar.
3. Autorizar acesso ao objeto no servidor e testar acesso cruzado.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 3. Autenticação não substitui autorização por objeto. Identificadores difíceis de adivinhar também não substituem o controle.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
