# Validação e purple team

Comum · estimativa 5 h · pré-requisitos: detection

## Objetivo
Verificar a cadeia teste → evento → alerta → resposta.

## Entenda antes de executar
Um teste executado com sucesso não prova que a detecção funcionou. Separe sucesso do procedimento, geração de telemetria e disparo do alerta.

## Roteiro guiado
1. Selecione um Atomic e leia dependências, impacto e cleanup.
2. Defina escopo autorizado, snapshot e critério de interrupção.
3. Em lab isolado, compare timestamps e registre resultado em cada etapa.

## Entrega
Relatório de validação com lacunas e plano de correção.

## Critério de aceite
O relatório não marca cobertura quando não há evidência de evento e alerta.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [MITRE CAR](https://github.com/mitre-attack/car) — Relacione hipótese, dados necessários e lógica de uma analítica.
- [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team) — Leia pré-requisitos e cleanup; execute apenas um teste aprovado em laboratório isolado.

[Voltar ao currículo](../CURRICULO.md)
