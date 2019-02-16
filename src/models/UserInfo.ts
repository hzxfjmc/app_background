import { Table, Column, Model,DataType } from 'sequelize-typescript'

@Table({
  tableName: 'user_info'
})
export class UserInfo extends Model<UserInfo> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column({
    type: DataType.STRING,
    comment:"文章标题"
  })
  name: string

  @Column({
    type: DataType.INTEGER,
    comment:"性别"
  })
  sex: number
}