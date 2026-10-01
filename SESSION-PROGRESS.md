# Página pós-compra — /obrigada

## Concluído
- Página criada em `src/app/obrigada/page.tsx`, com estilos isolados em `confirmation.module.css`.
- Identidade da landing preservada: logo real, fontes globais, tokens marfim, vinho, tinta e dourado.
- Confirmação, CTA principal, aviso, próximos passos, datas 07 e 08 de outubro, horário às 19h, ao vivo e CTA final.
- Metadata `noindex, nofollow`, inclusive Googlebot. Não existe sitemap no projeto e nenhum link público para a rota foi adicionado.
- Pixel global intacto; apenas evento customizado `WhatsAppGroupClick`, direcionado ao ID existente, com placement hero/final. Nenhum Purchase adicionado.
- `npx tsc --noEmit`, `npm run lint` e `git diff --check` passaram.

## Pendente antes da publicação
- Convite oficial fornecido pelo usuário e configurado em `WHATSAPP_GROUP_URL`, em `src/lib/site.ts`; ambos os botões passam a usar esse convite.
- Executar `npm run build` e inspeção no navegador em mobile/desktop: overflow, contraste, primeiro CTA, logo, console, foco e metatags.
- Verificar os dois cliques com o link real e o Pixel carregado (sem Purchase).
- Inspeção visual/detector de design ainda não executados.

## Bloqueio de validação
- Em 01/10/2026, o Windows reportou aproximadamente 166 MB de RAM livre de 8 GB.
- O servidor Next.js de `Ferramenta de Prospect Hotmart` foi encerrado com autorização do usuário, mas a RAM livre continuou insuficiente.
- Build e navegador não foram iniciados para evitar travamento. Nenhum servidor temporário foi deixado ativo nesta tarefa.

## Próxima ação
Liberar memória, ler este registro e verificar `git status`/`git diff`. Rodar build e validação visual sequencialmente e configurar o redirecionamento pós-compra aprovada da Hotmart para `/obrigada` no domínio publicado.
