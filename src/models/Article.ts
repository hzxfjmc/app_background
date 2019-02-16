import { Table, Column, Model,DataType } from 'sequelize-typescript'

@Table({
  tableName: 'article'
})
export class Article extends Model<Article> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column({
    type: DataType.STRING,
    comment:"文章标题"
  })
  title: string

  @Column({
    type: DataType.STRING,
    comment:"文章内容"
  })
  content: string
}