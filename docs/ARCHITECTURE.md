# Arquitetura e identidade

Portal estático sem dependências de runtime. index.html fornece a estrutura; src/data.js contém currículo, recursos e casos; src/core.js concentra validação de estado, filtro e avaliação; src/app.js renderiza rotas por hash; src/style.css define o sistema visual. Build copia somente arquivos públicos para dist/.

## Identidade
- Petróleo #103139 e #153b42: estrutura, navegação e ações principais.
- Cobre #a34d2f: ênfase editorial e sinalização.
- Papel #f5f4ef: área de leitura; verde claro #c7e4d1: apoio.
- Serifas de sistema nos títulos, sans-serif no corpo e monoespaçada nos metadados.
- Marca SE em escudo geométrico; SVG original. Sem fontes ou imagens externas no portal.

## Dados
Módulo: ID, rota, horas estimadas, pré-requisitos, objetivo, princípio, etapas, entrega, aceite e referências. Caso: ID, módulo, contexto, evidências sintéticas, alternativas, resposta e explicação. Recurso: ID, tipo, área, URL, descrição, atividade e data de consulta.

## Estado
Chave securityengineer:v1 no localStorage. Entradas são validadas contra IDs conhecidos; notas são limitadas e escapadas antes da renderização. Dados inválidos são descartados. Não há identidade autenticada ou garantia de integridade contra edição pelo próprio aluno.

## Limitações
Sem execução de ferramentas, análise real de malware, dados reais de incidentes, backend, importação de progresso, avaliação semântica ou provas protegidas. As rotas sugerem ordem, mas não bloqueiam módulos. O portal é uma bancada de estudo e decisão.
