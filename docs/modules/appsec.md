# AppSec e revisão de código

Engineer · estimativa 7 h · pré-requisitos: arquitetura

## Objetivo
Seguir entrada, controle e operação sensível no código.

## Entenda antes de executar
Encontrar um padrão suspeito não confirma explorabilidade. Verifique origem da entrada, proteções do framework, autorização e alcance.

## Roteiro guiado
1. Resolva um laboratório de controle de acesso na Academy.
2. Explique a diferença entre ocultar botão e autorizar no servidor.
3. Use Semgrep em código próprio; compare resultado antes/depois da correção.

## Entrega
Achado reproduzível com correção e teste de regressão.

## Critério de aceite
O teste usa duas identidades e verifica isolamento entre objetos.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [Semgrep Rules](https://github.com/semgrep/semgrep-rules) — Leia a licença específica das regras; teste um exemplo vulnerável e outro corrigido.
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/) — Use a folha do controle que está implementando e registre decisões de arquitetura.
- [PortSwigger Academy](https://portswigger.net/web-security) — Resolva um lab; explique a causa e como verificar a correção.
- [Trail of Bits Testing Handbook](https://appsec.guide/) — Escolha uma técnica e registre cobertura e limitações do teste.

[Voltar ao currículo](../CURRICULO.md)
