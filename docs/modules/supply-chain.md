# CI/CD e supply chain

Engineer · estimativa 5 h · pré-requisitos: appsec

## Objetivo
Proteger a transição de contribuição para execução privilegiada.

## Entenda antes de executar
Código e metadados de contribuições externas são entradas não confiáveis. Segredos e tokens elevam o impacto de sua execução em pipelines.

## Roteiro guiado
1. Desenhe eventos de PR, permissões do token e acesso a segredos.
2. Analise checkout, dependências e uso de entradas externas em comandos.
3. Use Scorecard como indício e revise manualmente um controle.

## Entrega
Revisão de workflow com fronteiras de confiança e correções.

## Critério de aceite
Contribuição não confiável não executa com segredos de publicação.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [OpenSSF Scorecard](https://github.com/ossf/scorecard) — Interprete cada resultado; uma pontuação não prova segurança do código.
- [Trail of Bits Skills](https://github.com/trailofbits/skills) — Comece por audit-context-building, differential-review e static-analysis; revise scripts e permissões.
- [Sentry Skills](https://github.com/getsentry/skills) — Estude security-review, gha-security-review e skill-scanner; adapte ao contexto do projeto.

[Voltar ao currículo](../CURRICULO.md)
