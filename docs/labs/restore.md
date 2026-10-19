# Backup não é recuperação

Exercício sintético de decisão, sem execução em sistemas.

Uma equipe quer encerrar um incidente após localizar backups.

## Evidências
- E1: Backup: job reportado como concluído.
- E2: Restauração: nenhum teste realizado após a alteração de esquema.
- E3: Aplicação: depende de chaves e configuração além do banco.

## Decisão
1. Encerrar porque o backup existe.
2. Restaurar sobre a única cópia preservada.
3. Testar restauração isolada e integridade da aplicação, preservando evidências.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 3. Disponibilidade de backup não comprova recuperabilidade. Valide dependências, integridade, RTO/RPO e critérios de retorno.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
