import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1611193269280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
        name: 'usuarios',
        columns:[
          {
            //coluna ID
            name: 'id',
            type:'interger',
            unsigned: true, //essa coluna nao pode ser negativa
            isPrimary: true, //essa coluna é uma PK
            isGenerated: true, //essa coluna vai ser gerada automaticamente
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10, //numeros depois da vigula
            precision: 2//numeors antes da virgula
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10, //numeros depois da vigula
            precision: 2//numeors antes da virgula
          },
          {
            name: 'about', 
            type: 'text',
          },
          {
            name: 'instructions', 
            type: 'text',
          },
          {
            name: 'open_on_weekends', 
            type: 'boolean',
          },
          {
            name: 'open_in_hours', 
            type: 'boolean',
          },
          {
            name: 'telefone', 
            type: 'number',
          },
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('usuarios')
    }

}
