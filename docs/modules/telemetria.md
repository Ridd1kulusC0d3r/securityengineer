# Telemetria que sustenta decisões

Comum · estimativa 5 h · pré-requisitos: fundamentos

## Objetivo
Distinguir ausência de evento de ausência de atividade.

## Entenda antes de executar
Coleta, transporte, parsing e retenção podem falhar independentemente. Sem verificar a saúde da coleta, silêncio não demonstra segurança.

## Roteiro guiado
1. Selecione um dataset OTRF e registre a versão e origem.
2. Liste campos de tempo, host, usuário, ação e resultado; normalize o fuso.
3. Compare contagem antes e depois de filtrar e registre campos ausentes.

## Entrega
Dicionário de dados e timeline de dez eventos.

## Critério de aceite
A timeline permite rastrear cada afirmação ao evento original.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [OTRF Security Datasets](https://github.com/OTRF/Security-Datasets) — Selecione um conjunto e produza uma timeline; documente as limitações da amostra.
- [Guia Sigma](https://sigmahq.io/docs/) — Estude seleção, condição, logsource e mapeamento do backend.

[Voltar ao currículo](../CURRICULO.md)
