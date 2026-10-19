# Skills de IA para segurança

Skills são instruções reutilizáveis, às vezes acompanhadas de scripts. Ferramentas executam operações; competências profissionais permitem julgar o resultado. Não trate esses três conceitos como equivalentes.

| Skill | Origem | Uso |
|---|---|---|
| audit-context-building | Trail of Bits | Entender o código antes da auditoria |
| static-analysis | Trail of Bits | CodeQL, Semgrep e SARIF |
| differential-review | Trail of Bits | Revisão de mudanças |
| insecure-defaults | Trail of Bits | Configuração insegura e fail-open |
| semgrep-rule-creator | Trail of Bits | Criar regras de análise estática |
| variant-analysis | Trail of Bits | Encontrar variantes de falhas |
| yara-authoring | Trail of Bits | Autoria de regras YARA |
| fp-check | Trail of Bits | Verificação de falsos positivos de achados de código |
| security-review | Sentry | Revisão de vulnerabilidades |
| gha-security-review | Sentry | Segurança de GitHub Actions |
| django-access-review | Sentry | Controle de acesso e IDOR |
| skill-scanner | Sentry | Inspeção de skills |

Fontes: https://github.com/trailofbits/skills e https://github.com/getsentry/skills (consulta documental 19/10/2026).

## Procedimento de avaliação

1. Leia SKILL.md, scripts e dependências na origem; registre commit e licença.
2. Identifique comandos, acesso a rede, escrita em disco e segredos necessários.
3. Use fixture sintética com resultado conhecido e ambiente descartável.
4. Compare com revisão manual; registre omissões e falsos positivos.
5. Aceite achados apenas com evidência reproduzível e revisão humana.

## Contrato de uso sugerido

Entrada: escopo, arquivos ou eventos, restrições e questão. Saída: achado, evidência com localização, impacto, confiança, hipótese alternativa, correção e teste. Não aceite atribuição de adversário nem comprometimento com base apenas em semelhança textual.

As coleções têm maior profundidade em AppSec do que SOC. fp-check não é um classificador de alertas de SIEM. Nenhuma skill é instalada automaticamente por este projeto.
