import { DataTypes, Model, Sequelize } from 'sequelize';
import db from '.';
import Comment from './comment';

export default class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: db.sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'User',
    tableName: 'users',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

User.hasMany(Comment, { foreignKey: 'commenter', sourceKey: 'id' });
