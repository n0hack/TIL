import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './user';

export default class Comment extends Model {}

Comment.init(
  {
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false,
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
    modelName: 'Comment',
    tableName: 'comments',
    paranoid: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);

Comment.belongsTo(User, { foreignKey: 'commenter', targetKey: 'id' });
