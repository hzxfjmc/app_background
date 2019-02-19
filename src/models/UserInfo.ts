import { Table, Column, Model,DataType } from 'sequelize-typescript'

@Table({
  tableName: 'userInfo'
})
export class UserInfo extends Model<UserInfo> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column({
    type: DataType.STRING,
    comment:"姓名"
  })
  name: string

  @Column({
    type: DataType.STRING,
    comment:"密码"
  })
  password: string

  @Column({
    type: DataType.INTEGER,
    comment:"性别"
  })
  sex: number
}