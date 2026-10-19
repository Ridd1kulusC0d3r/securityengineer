# O silêncio do coletor

Exercício sintético de decisão, sem execução em sistemas.

O painel não mostra alertas há duas horas.

## Evidências
- E1: Coletor: último heartbeat há 125 minutos.
- E2: Endpoint: serviço de coleta parado após atualização.
- E3: Gateway: tráfego do host continua no período.

## Decisão
1. Concluir que não houve ataque.
2. Desabilitar as regras para reduzir ruído.
3. Restabelecer a coleta, delimitar a lacuna e buscar fontes alternativas.

## Entrega
Registre decisão, evidências que a sustentam, hipótese alternativa e próxima coleta.

<details><summary>Gabarito comentado</summary>

Alternativa 3. A ausência de alertas coincide com falha de coleta. A janela cega deve ser registrada; reiniciar o serviço não recupera necessariamente eventos perdidos.

</details>

A escolha objetiva é avaliada no portal. A qualidade da justificativa exige revisão humana.
