import { Table, Column, Model,DataType, AllowNull } from 'sequelize-typescript'

@Table({
  tableName: 'userInfo'
})
export class UserInfo extends Model<UserInfo> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment:"姓名"
  })
  name: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    comment:"密码"
  })
  password: string

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    comment:"性别"
  })
  sex: number

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    comment:"头像"
  })
  avata: number
}