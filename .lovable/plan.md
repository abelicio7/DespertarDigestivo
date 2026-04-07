

## Plano: Preparar a página para receber a VSL

### O que será feito

1. **Adicionar espaço para a VSL no Hero** — Logo abaixo da headline principal, inserir um container de vídeo responsivo (aspect-ratio 16:9) com um placeholder visual ("Carregando vídeo..." ou fundo escuro) e um comentário no código indicando onde colar o embed da VSL. O vídeo ficará como elemento central da seção hero.

2. **Melhorar a headline para alta conversão** — Reescrever a headline com foco em gatilhos emocionais mais fortes, urgência e identificação imediata. Exemplo de nova headline:
   - **Principal:** "Há dias que não consegue evacuar? Sente o corpo pesado, inchado e sem alívio?"
   - **Sub-headline:** "Assista ao vídeo e descubra o drink natural que está ajudando centenas de pessoas a libertar o intestino — sem laxantes, sem cólicas, sem sofrimento."

3. **Reorganizar o Hero** — A estrutura ficará:
   - Badge "🌿 Solução 100% Natural"
   - Headline principal (nova, mais impactante)
   - Sub-headline direcionando ao vídeo
   - **Container da VSL** (placeholder pronto para embed)
   - Botão CTA abaixo do vídeo → scroll para pricing

### Detalhes técnicos

- O container da VSL será um `div` com `aspect-ratio: 16/9`, fundo escuro, cantos arredondados, com um comentário `{/* COLE AQUI O EMBED DA SUA VSL */}` para fácil integração.
- A headline usará palavras-gatilho como "pesado", "inchado", "sem alívio" para gerar identificação emocional imediata.
- O restante da página permanece inalterado.

