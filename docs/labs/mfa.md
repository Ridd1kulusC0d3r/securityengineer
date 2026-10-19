# Aprovação de MFA fora do padrão

Exercício sintético de decisão, sem execução em sistemas.

Um usuário relata solicitações repetidas de MFA. O SOC precisa decidir a próxima ação.

## Evidências
- E1: IdP sintético: 14 solicitações negadas e uma aprovada em 7 minutos.
- E2: Usuário: não reconhece a aprovação; estava em reunião.
- E3: Aplicação: uma sessão nova acessou documentos após a aprovação.

## Decisão
1. Fechar como viagem por causa do IP estrangeiro.
2. Preservar eventos, revogar sessões suspeitas e validar a identidade por canal conhecido.
3. Bloquear toda a empresa por tempo indeterminado.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 2. Há evidências convergentes de sessão suspeita. A contenção específica reduz exposição; a investigação ainda precisa estabelecer escopo e ações realizadas.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
