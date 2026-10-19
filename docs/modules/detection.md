# Engenharia de detecção

Comum · estimativa 7 h · pré-requisitos: telemetria

## Objetivo
Criar uma detecção testável e revisável.

## Entenda antes de executar
Uma regra só tem valor quando os dados chegam, os campos correspondem e o sinal permite uma ação. Conversão de sintaxe não garante equivalência.

## Roteiro guiado
1. Escolha uma regra Sigma e descreva o comportamento em linguagem simples.
2. Mapeie campos para um backend e crie evento positivo, negativo e limítrofe.
3. Documente falsos positivos, responsável, versão e procedimento de triagem.

## Entrega
Regra com fixtures e evidência de teste.

## Critério de aceite
Os três casos têm resultado esperado explícito; dependências de coleta estão declaradas.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [SigmaHQ](https://github.com/SigmaHQ/sigma) — Escolha uma regra; identifique logsource, campos, falsos positivos e teste no seu backend.
- [Elastic Detection Rules](https://github.com/elastic/detection-rules) — Compare uma regra com a telemetria disponível; valide os campos antes de habilitar.
- [Splunk Security Content](https://github.com/splunk/security_content) — Leia a busca, dependências de dados e recomendações de triagem.
- [Guia Sigma](https://sigmahq.io/docs/) — Estude seleção, condição, logsource e mapeamento do backend.

[Voltar ao currículo](../CURRICULO.md)
