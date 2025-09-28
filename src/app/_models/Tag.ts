export class Tag {

  static readonly ANGULAR = new Tag('Angular', 'blue')
  static readonly PYTHON = new Tag('Python', 'purple')
  static readonly JAVASCRIPT = new Tag('Javascirpt', 'green')
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred')
  static readonly POSTGRES = new Tag('Postgres', 'lightblue')
  static readonly FLUTTER  = new Tag('Flutter', 'brown')
  static readonly PYGUI = new Tag('FreeSimpleGUI', 'red')
  static readonly AWS = new Tag('AWS', 'orange')
  static readonly DIGITALOCEAN = new Tag('DigitalOcean', 'pink')
  static readonly EXPRESS = new Tag('Express', 'darkblue')


  private constructor(private readonly key: string, public readonly color: string){

  }
  toString(){
    return this.key
  }
}