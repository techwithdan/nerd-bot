nerd-bot

Must use Node version 13+
run `npm i` to install dependencies

ENTRY

- index.js
- Main listener of client that redirects to events directory.

EVENTS

- Dir of all events that get redirected from the index.js.
- Name of file should match the client event.
- Link to list of all Events https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message

COMMANDS

- index.js is where we store an obj of all the commands we want to integrate with our bot.
- Structure is {command: function}; if the command exist it will redirect to the function that we add under the same dir

HELPER_FUNC

- Re-usable functions to reference.

CONTRIBUTORS 

- Daniel
- Dalton
- Victor