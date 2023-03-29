import * as argon2 from 'argon2';
import { Logger } from '@nestjs/common';
import { Role } from 'src/app/roles/entities/role.entity';
import { User } from 'src/app/users/entities/user.entity';

const logger = new Logger('Boostrap');
const description = 'Lorem ipsum dolor sit amet magna aliqua';

export async function createRoles() {
  const roles = await Role.find();

  if (roles.length === 0) {
    try {
      const new_roles = ['ADMINISTRADOR', 'USUARIO'].map((item) => {
        const rol_db = new Role();
        rol_db.name = item;
        rol_db.description = description;
        return rol_db;
      });

      await Role.save(new_roles);
      logger.warn('Roles creados');
    } catch (error) {
      logger.error(error);
    }
  }
}

export async function createAdmin() {
  const adminExists = await User.findOne({
    where: { email: 'admin@gmail.com' },
  });

  if (!adminExists) {
    try {
      const role = new Role();
      role.name = 'ADMINISTRADOR';

      const hashedPassword = await argon2.hash('123');

      const new_admin = new User();

      new_admin.first_name = 'Accelerate';
      new_admin.last_name = 'Ed';
      new_admin.birth_date = new Date().toISOString();
      new_admin.username = 'S4A';
      new_admin.email = 'admin@gmail.com';
      new_admin.password = hashedPassword;
      new_admin.role = role;
      new_admin.verified = true;

      await User.save(new_admin);
      logger.warn('Administrador creado');
    } catch (error) {
      logger.error(error);
    }
  }
}
