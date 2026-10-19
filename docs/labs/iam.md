# Menor privilégio sem indisponibilidade

Exercício sintético de decisão, sem execução em sistemas.

Uma aplicação de upload usa permissões amplas.

## Evidências
- E1: Função necessária: gravar objetos em uploads/cliente-a/.
- E2: Política atual: todas as ações sobre todos os recursos.
- E3: Operação: leitura de outros clientes não faz parte do serviço.

## Decisão
1. Remover toda permissão e encerrar a mudança.
2. Restringir ação e recurso, testar a função e negar acesso cruzado com rollback planejado.
3. Manter a política ampla porque o serviço funciona.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 2. A mudança deve preservar o fluxo legítimo e demonstrar a remoção de privilégios excedentes, considerando as políticas efetivas.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
