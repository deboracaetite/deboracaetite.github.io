# Agenda de manicure

Site simples para clientes pedirem horário de manicure e pedicure pelo WhatsApp, com uma agenda para a profissional organizar os atendimentos.

## Como funciona

**Para a cliente** (página inicial):
1. Escolhe o serviço (com preço e duração).
2. Escolhe o dia e o horário.
3. Escreve o nome e toca em **Enviar pedido pelo WhatsApp**. A mensagem já sai pronta.

**Para a profissional** (link "Área da profissional" no fim da página, ou `.../#agenda`):
- Vê os atendimentos do dia, da semana e quanto já fez no mês.
- Cola a mensagem que a cliente mandou e os campos se preenchem sozinhos.
- Avisa se dois horários batem.
- Marca como feito ou faltou e manda a confirmação para a cliente pelo WhatsApp.
- Baixa uma cópia de segurança da agenda.

## Como mudar nome, preços e horários

Tudo fica no arquivo [`config.js`](config.js). No GitHub, abra o arquivo, clique no lápis, mude o que quiser e clique em **Commit changes**. O site atualiza em 1 ou 2 minutos.

## Limites desta versão

- A cliente vê todos os horários do expediente, mesmo os já ocupados. O horário só vale quando a profissional confirma pelo WhatsApp.
- A agenda fica guardada no navegador do celular dela, sem servidor. Trocar de celular ou limpar os dados do navegador apaga a agenda, por isso existe o botão **Baixar cópia**.
- Qualquer pessoa pode abrir a página da agenda, mas ela vê apenas os dados do próprio aparelho, que ficam vazios.

Um próximo passo possível é ligar um banco de dados gratuito (ex.: Supabase) para esconder os horários ocupados e usar a agenda em mais de um aparelho.
