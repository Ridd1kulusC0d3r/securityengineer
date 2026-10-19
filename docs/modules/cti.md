# Da inteligência à hipótese de hunting

Analyst · estimativa 5 h · pré-requisitos: telemetria

## Objetivo
Transformar relato de ameaça em hipótese observável.

## Entenda antes de executar
Um IOC é uma observação contextual, não um veredito. Validade temporal, infraestrutura compartilhada e independência das fontes alteram sua utilidade.

## Roteiro guiado
1. Escolha um relato público com comportamento explicitamente descrito.
2. Mapeie a técnica ATT&CK e mantenha trecho, URL, data e confiança.
3. Defina eventos necessários e um caso benigno que produziria sinais parecidos.

## Entrega
Ficha CTI com hipótese, fonte, validade e consulta proposta.

## Critério de aceite
O mapeamento é sustentado pelo comportamento; autoria fica separada.

## Explique com suas palavras
Explique a decisão a uma pessoa de outra equipe. Diferencie o que observou, o que inferiu e qual dado ainda precisa obter.

## Fontes e próximo passo
- [MITRE CAR](https://github.com/mitre-attack/car) — Relacione hipótese, dados necessários e lógica de uma analítica.
- [ATT&CK STIX Data](https://github.com/mitre-attack/attack-stix-data) — Preserve IDs, versão e referências ao importar; trate objetos revogados e deprecated.
- [MITRE ATT&CK](https://attack.mitre.org/) — Mapeie o comportamento descrito pela evidência, sem inferir autoria por técnica.

[Voltar ao currículo](../CURRICULO.md)
