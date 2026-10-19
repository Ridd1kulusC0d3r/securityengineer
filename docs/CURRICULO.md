# Currículo guiado

Estimativas editoriais de dedicação, não carga horária certificada. Não há certificação ou promessa de emprego.

| Módulo | Rota | Horas | Pré-requisitos |
|---|---|---:|---|
| [Sistemas, rede e identidade](modules/fundamentos.md) | Comum | 4 | Nenhum |
| [Telemetria que sustenta decisões](modules/telemetria.md) | Comum | 5 | fundamentos |
| [Triagem de alertas e identidade](modules/triagem.md) | Analyst | 5 | telemetria |
| [Investigação e resposta](modules/dfir.md) | Analyst | 6 | triagem |
| [Da inteligência à hipótese de hunting](modules/cti.md) | Analyst | 5 | telemetria |
| [Engenharia de detecção](modules/detection.md) | Comum | 7 | telemetria |
| [Validação e purple team](modules/purple.md) | Comum | 5 | detection |
| [Threat modeling e controles](modules/arquitetura.md) | Engineer | 6 | fundamentos |
| [AppSec e revisão de código](modules/appsec.md) | Engineer | 7 | arquitetura |
| [Cloud, IAM e infraestrutura como código](modules/cloud.md) | Engineer | 7 | arquitetura |
| [CI/CD e supply chain](modules/supply-chain.md) | Engineer | 5 | appsec |
| [Skills de IA com evidência e revisão](modules/ia.md) | Comum | 4 | detection |

## Sequências sugeridas

- Analyst: fundamentos → telemetria → triagem → DFIR → CTI → detection → purple → IA.
- Engineer: fundamentos → telemetria → arquitetura → AppSec → cloud → supply chain → detection → purple → IA.

## Projeto final

Analyst: relatório com timeline, hipótese, consulta, evidências e resposta proposta. Engineer: modelo de ameaças, controle implementado, teste de regressão e plano de rollback. Em ambos, entregue fontes, limitações e instruções reproduzíveis.

## Rubrica humana

Avalie de 0 a 2 cada eixo: rastreabilidade, correção técnica, reprodução, impacto operacional e clareza. Zero = ausente, um = parcial, dois = verificável. Meta sugerida: 8/10, sem zero em rastreabilidade ou correção. O portal não atribui essa nota automaticamente.
