import chalk from 'chalk'
import boxen from 'boxen'
import * as fs from 'fs'
import * as path from 'path'

// Text + chalk definitions
const data = {
  name: chalk.bold(chalk.whiteBright('           Andrew Leach')),
  handle: chalk.bold(chalk.whiteBright('anleac')),
  work: chalk.white('Senior Software Engineer at Microsoft'),
  github: chalk.gray('https://github.com/') + chalk.green('anleac'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('andrewkleas'),
  web: chalk.cyan('https://andrewlea.ch/'),
  email: chalk.cyan('resume.mutation949@passinbox.com'),
  npx:
    chalk.red('npx') +
    ' ' +
    chalk.white('@anleac/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('    Work:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:'),
  labelEmail: chalk.white.bold('    Email:')
}

// Preformating strings
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const email =  `${data.labelEmail} ${data.email}`
const carding = `${data.labelCard}  ${data.npx}`

// Putting it into a variable that we can easily use for boxen
const output = `
${heading}

${working}

${githubing}
${linkedining}
${webing}
${email}

${carding}
`

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.yellow(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: boxen.BorderStyle.Single
    })
  )
)
