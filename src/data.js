export const resources = [
  {
    "id": "sigma",
    "name": "SigmaHQ",
    "kind": "Repo",
    "area": "Detection",
    "url": "https://github.com/SigmaHQ/sigma",
    "description": "Regras portáveis para eventos de segurança.",
    "use": "Escolha uma regra; identifique logsource, campos, falsos positivos e teste no seu backend.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "elastic",
    "name": "Elastic Detection Rules",
    "kind": "Repo",
    "area": "Detection",
    "url": "https://github.com/elastic/detection-rules",
    "description": "Detecções como código para Elastic Security.",
    "use": "Compare uma regra com a telemetria disponível; valide os campos antes de habilitar.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "splunk",
    "name": "Splunk Security Content",
    "kind": "Repo",
    "area": "Detection",
    "url": "https://github.com/splunk/security_content",
    "description": "Conteúdo analítico para Splunk.",
    "use": "Leia a busca, dependências de dados e recomendações de triagem.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "datasets",
    "name": "OTRF Security Datasets",
    "kind": "Repo",
    "area": "SOC",
    "url": "https://github.com/OTRF/Security-Datasets",
    "description": "Eventos para investigação reproduzível.",
    "use": "Selecione um conjunto e produza uma timeline; documente as limitações da amostra.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "velociraptor",
    "name": "Velociraptor",
    "kind": "Tool",
    "area": "DFIR",
    "url": "https://github.com/Velocidex/velociraptor",
    "description": "Coleta e investigação de endpoints com VQL.",
    "use": "Em uma VM própria, colete artefatos de processos e documente origem e horário.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "car",
    "name": "MITRE CAR",
    "kind": "Repo",
    "area": "Detection",
    "url": "https://github.com/mitre-attack/car",
    "description": "Analíticas de comportamentos adversários.",
    "use": "Relacione hipótese, dados necessários e lógica de uma analítica.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "atomic",
    "name": "Atomic Red Team",
    "kind": "Tool",
    "area": "Detection",
    "url": "https://github.com/redcanaryco/atomic-red-team",
    "description": "Testes de comportamentos associados ao ATT&CK.",
    "use": "Leia pré-requisitos e cleanup; execute apenas um teste aprovado em laboratório isolado.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "soc",
    "name": "Awesome SOC",
    "kind": "Repo",
    "area": "SOC",
    "url": "https://github.com/cyb3rxp/awesome-soc",
    "description": "Índice de referências para SOC e CSIRT.",
    "use": "Escolha uma capacidade operacional e desenhe um procedimento com responsável e evidência.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "detection",
    "name": "Awesome Detection Engineering",
    "kind": "Repo",
    "area": "Detection",
    "url": "https://github.com/infosecB/awesome-detection-engineering",
    "description": "Curadoria de engenharia de detecção.",
    "use": "Use como índice; priorize desenho, validação e manutenção de regras.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "prowler",
    "name": "Prowler",
    "kind": "Tool",
    "area": "Cloud",
    "url": "https://github.com/prowler-cloud/prowler",
    "description": "Avaliação de postura de segurança cloud.",
    "use": "Em conta de laboratório, examine permissões de coleta e valide um achado manualmente.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "checkov",
    "name": "Checkov",
    "kind": "Tool",
    "area": "Cloud",
    "url": "https://github.com/bridgecrewio/checkov",
    "description": "Verificação de infraestrutura como código.",
    "use": "Analise um manifesto local e compare o achado com o recurso realmente implantado.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "semgrep",
    "name": "Semgrep Rules",
    "kind": "Repo",
    "area": "AppSec",
    "url": "https://github.com/semgrep/semgrep-rules",
    "description": "Regras de análise estática.",
    "use": "Leia a licença específica das regras; teste um exemplo vulnerável e outro corrigido.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "scorecard",
    "name": "OpenSSF Scorecard",
    "kind": "Tool",
    "area": "Supply chain",
    "url": "https://github.com/ossf/scorecard",
    "description": "Verificações de práticas de segurança em projetos.",
    "use": "Interprete cada resultado; uma pontuação não prova segurança do código.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "stix",
    "name": "ATT&CK STIX Data",
    "kind": "Repo",
    "area": "CTI",
    "url": "https://github.com/mitre-attack/attack-stix-data",
    "description": "Dados ATT&CK em STIX 2.1.",
    "use": "Preserve IDs, versão e referências ao importar; trate objetos revogados e deprecated.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "nist",
    "name": "NIST SP 800-61 Rev. 3",
    "kind": "Guia",
    "area": "DFIR",
    "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
    "description": "Resposta a incidentes integrada à gestão de risco.",
    "use": "Mapeie preparação, resposta e recuperação para responsáveis do seu cenário.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "attack",
    "name": "MITRE ATT&CK",
    "kind": "Guia",
    "area": "CTI",
    "url": "https://attack.mitre.org/",
    "description": "Base de comportamentos adversários observados.",
    "use": "Mapeie o comportamento descrito pela evidência, sem inferir autoria por técnica.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "sigma-guide",
    "name": "Guia Sigma",
    "kind": "Guia",
    "area": "Detection",
    "url": "https://sigmahq.io/docs/",
    "description": "Estrutura e conversão de regras Sigma.",
    "use": "Estude seleção, condição, logsource e mapeamento do backend.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "asvs",
    "name": "OWASP ASVS",
    "kind": "Guia",
    "area": "AppSec",
    "url": "https://owasp.org/projects/asvs",
    "description": "Requisitos verificáveis de segurança de aplicações.",
    "use": "Selecione requisitos aplicáveis e defina um teste com resultado verificável.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "cheatsheets",
    "name": "OWASP Cheat Sheets",
    "kind": "Guia",
    "area": "AppSec",
    "url": "https://cheatsheetseries.owasp.org/",
    "description": "Orientação de implementação segura.",
    "use": "Use a folha do controle que está implementando e registre decisões de arquitetura.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "threatmodel",
    "name": "OWASP Threat Modeling",
    "kind": "Guia",
    "area": "Arquitetura",
    "url": "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
    "description": "Modelagem de sistemas, ameaças e controles.",
    "use": "Desenhe ativos, fluxos e fronteiras de confiança; priorize três riscos.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "academy",
    "name": "PortSwigger Academy",
    "kind": "Guia",
    "area": "AppSec",
    "url": "https://portswigger.net/web-security",
    "description": "Aulas e laboratórios de segurança web.",
    "use": "Resolva um lab; explique a causa e como verificar a correção.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "handbook",
    "name": "Trail of Bits Testing Handbook",
    "kind": "Guia",
    "area": "AppSec",
    "url": "https://appsec.guide/",
    "description": "Testes de segurança e ferramentas de análise.",
    "use": "Escolha uma técnica e registre cobertura e limitações do teste.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "tob",
    "name": "Trail of Bits Skills",
    "kind": "Skill IA",
    "area": "AppSec",
    "url": "https://github.com/trailofbits/skills",
    "description": "Skills de auditoria, análise estática, YARA e revisão.",
    "use": "Comece por audit-context-building, differential-review e static-analysis; revise scripts e permissões.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  },
  {
    "id": "sentry",
    "name": "Sentry Skills",
    "kind": "Skill IA",
    "area": "AppSec",
    "url": "https://github.com/getsentry/skills",
    "description": "Skills de revisão de segurança e workflows.",
    "use": "Estude security-review, gha-security-review e skill-scanner; adapte ao contexto do projeto.",
    "verified": "2026-10-19",
    "status": "Documentação consultada; execução não auditada"
  }
];
export const modules = [
  {
    "id": "fundamentos",
    "role": "Comum",
    "title": "Sistemas, rede e identidade",
    "hours": 4,
    "prerequisites": [],
    "objective": "Explicar um acesso do DNS à autorização.",
    "concept": "Autenticação confirma identidade; autorização decide o que essa identidade pode fazer. Um evento de login isolado não informa o acesso efetivo.",
    "steps": [
      "Desenhe cliente, resolvedor DNS, aplicação e provedor de identidade.",
      "Marque onde existem logs, credenciais e fronteiras de confiança.",
      "Compare login bem-sucedido com uma ação negada na aplicação."
    ],
    "deliverable": "Mapa de fluxo e dicionário de cinco eventos.",
    "acceptance": "O mapa identifica origem, destino, horário, identidade e lacunas.",
    "resources": [
      "cheatsheets",
      "threatmodel"
    ]
  },
  {
    "id": "telemetria",
    "role": "Comum",
    "title": "Telemetria que sustenta decisões",
    "hours": 5,
    "prerequisites": [
      "fundamentos"
    ],
    "objective": "Distinguir ausência de evento de ausência de atividade.",
    "concept": "Coleta, transporte, parsing e retenção podem falhar independentemente. Sem verificar a saúde da coleta, silêncio não demonstra segurança.",
    "steps": [
      "Selecione um dataset OTRF e registre a versão e origem.",
      "Liste campos de tempo, host, usuário, ação e resultado; normalize o fuso.",
      "Compare contagem antes e depois de filtrar e registre campos ausentes."
    ],
    "deliverable": "Dicionário de dados e timeline de dez eventos.",
    "acceptance": "A timeline permite rastrear cada afirmação ao evento original.",
    "resources": [
      "datasets",
      "sigma-guide"
    ]
  },
  {
    "id": "triagem",
    "role": "Analyst",
    "title": "Triagem de alertas e identidade",
    "hours": 5,
    "prerequisites": [
      "telemetria"
    ],
    "objective": "Definir escopo sem confundir suspeita com confirmação.",
    "concept": "Severidade técnica e prioridade operacional são diferentes. Prioridade depende de impacto, exposição, contexto e confiança.",
    "steps": [
      "Abra o laboratório de MFA e classifique cada evidência.",
      "Escreva duas hipóteses alternativas e o dado que as diferenciaria.",
      "Registre ação imediata, responsável e condição de escalonamento."
    ],
    "deliverable": "Registro de incidente com fatos, hipóteses e próximos passos.",
    "acceptance": "A conclusão não atribui comprometimento apenas por geolocalização.",
    "resources": [
      "soc",
      "nist"
    ]
  },
  {
    "id": "dfir",
    "role": "Analyst",
    "title": "Investigação e resposta",
    "hours": 6,
    "prerequisites": [
      "triagem"
    ],
    "objective": "Produzir uma timeline e preservar evidências antes de concluir.",
    "concept": "Coletar artefatos não é explicar um incidente. A investigação precisa de escopo, proveniência e uma sequência temporal sustentada.",
    "steps": [
      "Defina quais artefatos responderiam à hipótese de persistência.",
      "Estude um artefato Velociraptor e suas permissões; use VM própria se executar.",
      "Documente coleta, UTC, hash do arquivo exportado e limites de integridade."
    ],
    "deliverable": "Plano de coleta, timeline e proposta de contenção.",
    "acceptance": "Cada medida possui impacto, responsável e critério de recuperação.",
    "resources": [
      "velociraptor",
      "nist"
    ]
  },
  {
    "id": "cti",
    "role": "Analyst",
    "title": "Da inteligência à hipótese de hunting",
    "hours": 5,
    "prerequisites": [
      "telemetria"
    ],
    "objective": "Transformar relato de ameaça em hipótese observável.",
    "concept": "Um IOC é uma observação contextual, não um veredito. Validade temporal, infraestrutura compartilhada e independência das fontes alteram sua utilidade.",
    "steps": [
      "Escolha um relato público com comportamento explicitamente descrito.",
      "Mapeie a técnica ATT&CK e mantenha trecho, URL, data e confiança.",
      "Defina eventos necessários e um caso benigno que produziria sinais parecidos."
    ],
    "deliverable": "Ficha CTI com hipótese, fonte, validade e consulta proposta.",
    "acceptance": "O mapeamento é sustentado pelo comportamento; autoria fica separada.",
    "resources": [
      "attack",
      "stix",
      "car"
    ]
  },
  {
    "id": "detection",
    "role": "Comum",
    "title": "Engenharia de detecção",
    "hours": 7,
    "prerequisites": [
      "telemetria"
    ],
    "objective": "Criar uma detecção testável e revisável.",
    "concept": "Uma regra só tem valor quando os dados chegam, os campos correspondem e o sinal permite uma ação. Conversão de sintaxe não garante equivalência.",
    "steps": [
      "Escolha uma regra Sigma e descreva o comportamento em linguagem simples.",
      "Mapeie campos para um backend e crie evento positivo, negativo e limítrofe.",
      "Documente falsos positivos, responsável, versão e procedimento de triagem."
    ],
    "deliverable": "Regra com fixtures e evidência de teste.",
    "acceptance": "Os três casos têm resultado esperado explícito; dependências de coleta estão declaradas.",
    "resources": [
      "sigma",
      "sigma-guide",
      "elastic",
      "splunk"
    ]
  },
  {
    "id": "purple",
    "role": "Comum",
    "title": "Validação e purple team",
    "hours": 5,
    "prerequisites": [
      "detection"
    ],
    "objective": "Verificar a cadeia teste → evento → alerta → resposta.",
    "concept": "Um teste executado com sucesso não prova que a detecção funcionou. Separe sucesso do procedimento, geração de telemetria e disparo do alerta.",
    "steps": [
      "Selecione um Atomic e leia dependências, impacto e cleanup.",
      "Defina escopo autorizado, snapshot e critério de interrupção.",
      "Em lab isolado, compare timestamps e registre resultado em cada etapa."
    ],
    "deliverable": "Relatório de validação com lacunas e plano de correção.",
    "acceptance": "O relatório não marca cobertura quando não há evidência de evento e alerta.",
    "resources": [
      "atomic",
      "car"
    ]
  },
  {
    "id": "arquitetura",
    "role": "Engineer",
    "title": "Threat modeling e controles",
    "hours": 6,
    "prerequisites": [
      "fundamentos"
    ],
    "objective": "Converter ameaças em requisitos verificáveis.",
    "concept": "Fronteiras de confiança mostram onde pressupostos mudam. Um controle precisa reduzir um risco específico e ter evidência de funcionamento.",
    "steps": [
      "Modele uma API com banco, fila e provedor de identidade.",
      "Use STRIDE como perguntas sobre cada fluxo; priorize impacto e exposição.",
      "Associe controles a requisitos ASVS e defina testes."
    ],
    "deliverable": "Modelo de ameaças com três decisões documentadas.",
    "acceptance": "Cada risco tem ativo, caminho, controle, teste e risco residual.",
    "resources": [
      "threatmodel",
      "asvs"
    ]
  },
  {
    "id": "appsec",
    "role": "Engineer",
    "title": "AppSec e revisão de código",
    "hours": 7,
    "prerequisites": [
      "arquitetura"
    ],
    "objective": "Seguir entrada, controle e operação sensível no código.",
    "concept": "Encontrar um padrão suspeito não confirma explorabilidade. Verifique origem da entrada, proteções do framework, autorização e alcance.",
    "steps": [
      "Resolva um laboratório de controle de acesso na Academy.",
      "Explique a diferença entre ocultar botão e autorizar no servidor.",
      "Use Semgrep em código próprio; compare resultado antes/depois da correção."
    ],
    "deliverable": "Achado reproduzível com correção e teste de regressão.",
    "acceptance": "O teste usa duas identidades e verifica isolamento entre objetos.",
    "resources": [
      "academy",
      "semgrep",
      "cheatsheets",
      "handbook"
    ]
  },
  {
    "id": "cloud",
    "role": "Engineer",
    "title": "Cloud, IAM e infraestrutura como código",
    "hours": 7,
    "prerequisites": [
      "arquitetura"
    ],
    "objective": "Reduzir exposição e privilégios sem interromper o serviço.",
    "concept": "Uma política aparentemente restrita pode ser ampliada por outra política. Analise identidade, recurso, condições e permissões efetivas.",
    "steps": [
      "Modele uma aplicação que grava somente em um prefixo de storage.",
      "Analise IaC com Checkov; explique um achado sem depender apenas do scanner.",
      "Planeje validação com Prowler em conta própria e documente rollback."
    ],
    "deliverable": "Proposta de menor privilégio com testes de acesso permitido e negado.",
    "acceptance": "O serviço mantém a função necessária e perde o acesso excedente.",
    "resources": [
      "prowler",
      "checkov"
    ]
  },
  {
    "id": "supply-chain",
    "role": "Engineer",
    "title": "CI/CD e supply chain",
    "hours": 5,
    "prerequisites": [
      "appsec"
    ],
    "objective": "Proteger a transição de contribuição para execução privilegiada.",
    "concept": "Código e metadados de contribuições externas são entradas não confiáveis. Segredos e tokens elevam o impacto de sua execução em pipelines.",
    "steps": [
      "Desenhe eventos de PR, permissões do token e acesso a segredos.",
      "Analise checkout, dependências e uso de entradas externas em comandos.",
      "Use Scorecard como indício e revise manualmente um controle."
    ],
    "deliverable": "Revisão de workflow com fronteiras de confiança e correções.",
    "acceptance": "Contribuição não confiável não executa com segredos de publicação.",
    "resources": [
      "scorecard",
      "sentry",
      "tob"
    ]
  },
  {
    "id": "ia",
    "role": "Comum",
    "title": "Skills de IA com evidência e revisão",
    "hours": 4,
    "prerequisites": [
      "detection"
    ],
    "objective": "Usar agentes para acelerar tarefas mantendo rastreabilidade.",
    "concept": "Uma skill fornece instruções e pode incluir scripts; não é uma certificação de competência nem prova de correção. A saída precisa de validação independente.",
    "steps": [
      "Leia uma skill Trail of Bits e identifique entradas, ferramentas e saídas.",
      "Forneça um exemplo pequeno com resposta conhecida; registre acertos e erros.",
      "Exija referência ao arquivo ou evento, confiança e lacunas; revise antes de aplicar."
    ],
    "deliverable": "Avaliação comparativa manual × assistida por IA.",
    "acceptance": "Não há achado aceito apenas porque o agente afirmou; dados sensíveis não são usados no teste.",
    "resources": [
      "tob",
      "sentry"
    ]
  }
];
export const labs = [
  {
    "id": "mfa",
    "module": "triagem",
    "title": "Aprovação de MFA fora do padrão",
    "brief": "Um usuário relata solicitações repetidas de MFA. O SOC precisa decidir a próxima ação.",
    "evidence": [
      "IdP sintético: 14 solicitações negadas e uma aprovada em 7 minutos.",
      "Usuário: não reconhece a aprovação; estava em reunião.",
      "Aplicação: uma sessão nova acessou documentos após a aprovação."
    ],
    "options": [
      "Fechar como viagem por causa do IP estrangeiro.",
      "Preservar eventos, revogar sessões suspeitas e validar a identidade por canal conhecido.",
      "Bloquear toda a empresa por tempo indeterminado."
    ],
    "answer": 1,
    "explanation": "Há evidências convergentes de sessão suspeita. A contenção específica reduz exposição; a investigação ainda precisa estabelecer escopo e ações realizadas."
  },
  {
    "id": "collector",
    "module": "telemetria",
    "title": "O silêncio do coletor",
    "brief": "O painel não mostra alertas há duas horas.",
    "evidence": [
      "Coletor: último heartbeat há 125 minutos.",
      "Endpoint: serviço de coleta parado após atualização.",
      "Gateway: tráfego do host continua no período."
    ],
    "options": [
      "Concluir que não houve ataque.",
      "Desabilitar as regras para reduzir ruído.",
      "Restabelecer a coleta, delimitar a lacuna e buscar fontes alternativas."
    ],
    "answer": 2,
    "explanation": "A ausência de alertas coincide com falha de coleta. A janela cega deve ser registrada; reiniciar o serviço não recupera necessariamente eventos perdidos."
  },
  {
    "id": "ioc",
    "module": "cti",
    "title": "Um IP não é um adversário",
    "brief": "Uma conexão coincide com IOC de um relatório antigo.",
    "evidence": [
      "Relatório: IP associado a campanha nove meses atrás.",
      "Contexto sintético: endereço atualmente atende hospedagem compartilhada.",
      "Proxy: acesso isolado, sem informação suficiente sobre conteúdo."
    ],
    "options": [
      "Atribuir o host ao grupo citado.",
      "Manter como pista, verificar domínio, tempo e outros comportamentos antes de concluir.",
      "Ignorar qualquer IOC antigo em todos os casos."
    ],
    "answer": 1,
    "explanation": "Tempo e compartilhamento reduzem especificidade. A pista merece contexto; não sustenta sozinha autoria ou comprometimento."
  },
  {
    "id": "sigma",
    "module": "detection",
    "title": "Regra correta, campo errado",
    "brief": "Uma regra convertida nunca dispara.",
    "evidence": [
      "Regra: compara Image com um caminho de executável.",
      "Evento: o pipeline armazena o campo como process.executable.",
      "Fixture: comportamento esperado aparece em eventos coletados."
    ],
    "options": [
      "Ajustar o mapeamento e testar casos positivos e negativos.",
      "Reduzir a severidade do alerta.",
      "Concluir que o ambiente está protegido."
    ],
    "answer": 0,
    "explanation": "A lógica depende do esquema real. Corrija o mapeamento, preserve a semântica e valide os eventos benignos antes de publicar."
  },
  {
    "id": "idor",
    "module": "appsec",
    "title": "O objeto de outra pessoa",
    "brief": "Uma API retorna faturas pelo identificador.",
    "evidence": [
      "Usuário A recebe sua fatura em /invoices/41.",
      "Usuário A também recebe a fatura de B em /invoices/42.",
      "Servidor: autentica o token, mas não verifica vínculo com a fatura."
    ],
    "options": [
      "Ocultar IDs no frontend.",
      "Trocar IDs numéricos por UUID e encerrar.",
      "Autorizar acesso ao objeto no servidor e testar acesso cruzado."
    ],
    "answer": 2,
    "explanation": "Autenticação não substitui autorização por objeto. Identificadores difíceis de adivinhar também não substituem o controle."
  },
  {
    "id": "iam",
    "module": "cloud",
    "title": "Menor privilégio sem indisponibilidade",
    "brief": "Uma aplicação de upload usa permissões amplas.",
    "evidence": [
      "Função necessária: gravar objetos em uploads/cliente-a/.",
      "Política atual: todas as ações sobre todos os recursos.",
      "Operação: leitura de outros clientes não faz parte do serviço."
    ],
    "options": [
      "Remover toda permissão e encerrar a mudança.",
      "Restringir ação e recurso, testar a função e negar acesso cruzado com rollback planejado.",
      "Manter a política ampla porque o serviço funciona."
    ],
    "answer": 1,
    "explanation": "A mudança deve preservar o fluxo legítimo e demonstrar a remoção de privilégios excedentes, considerando as políticas efetivas."
  },
  {
    "id": "pipeline",
    "module": "supply-chain",
    "title": "PR na fronteira de confiança",
    "brief": "Um workflow executa código de uma contribuição externa.",
    "evidence": [
      "Workflow: usa pull_request_target e token com escrita.",
      "Passo: checkout do head do PR e execução de script desse checkout.",
      "Job: disponibiliza segredo usado na publicação."
    ],
    "options": [
      "Separar validação não privilegiada da publicação e impedir execução do PR com segredos.",
      "Somente renomear o segredo.",
      "Confiar porque o workflow pertence ao repositório principal."
    ],
    "answer": 0,
    "explanation": "O contexto privilegiado executa entrada não confiável. A correção deve quebrar esse caminho, não apenas alterar nomes ou ocultar logs."
  },
  {
    "id": "restore",
    "module": "dfir",
    "title": "Backup não é recuperação",
    "brief": "Uma equipe quer encerrar um incidente após localizar backups.",
    "evidence": [
      "Backup: job reportado como concluído.",
      "Restauração: nenhum teste realizado após a alteração de esquema.",
      "Aplicação: depende de chaves e configuração além do banco."
    ],
    "options": [
      "Encerrar porque o backup existe.",
      "Restaurar sobre a única cópia preservada.",
      "Testar restauração isolada e integridade da aplicação, preservando evidências."
    ],
    "answer": 2,
    "explanation": "Disponibilidade de backup não comprova recuperabilidade. Valide dependências, integridade, RTO/RPO e critérios de retorno."
  }
];
