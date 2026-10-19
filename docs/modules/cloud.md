# Cloud, IAM e infraestrutura como código

Engineer · estimativa 7 h · pré-requisitos: arquitetura

## Objetivo
Reduzir exposição e privilégios sem interromper o serviço.

## Entenda antes de executar
Uma política aparentemente restrita pode ser ampliada por outra política. Analise identidade, recurso, condições e permissões efetivas.

## Roteiro guiado
1. Modele uma aplicação que grava somente em um prefixo de storage.
2. Analise IaC com Checkov; explique um achado sem depender apenas do scanner.
3. Planeje validação com Prowler em conta própria e documente rollback.

## Entrega
Proposta de menor privilégio com testes de acesso permitido e negado.

## Critério de aceite
O serviço mantém a função necessária e perde o acesso excedente.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [Prowler](https://github.com/prowler-cloud/prowler) — Em conta de laboratório, examine permissões de coleta e valide um achado manualmente.
- [Checkov](https://github.com/bridgecrewio/checkov) — Analise um manifesto local e compare o achado com o recurso realmente implantado.

[Voltar ao currículo](../CURRICULO.md)
