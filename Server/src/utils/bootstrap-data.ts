import * as argon2 from 'argon2';
import { Logger } from '@nestjs/common';
import { Role } from 'src/app/roles/entities/role.entity';
import { User } from 'src/app/users/entities/user.entity';
import { Category } from 'src/app/categories/entities/category.entity';
import { Community } from 'src/app/communities/entities/community.entity';
import { async } from 'rxjs';
import { Unit } from 'src/app/units/entities/unit.entity';

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

export async function createCategories() {
  const categories = await Category.find();

  if (categories.length === 0) {
    try {
      const new_categories =
        ['VEGANOS',
          'VEGETARIANOS',
          'CARNIVOROS',
          'SIN GLUTEN',
          'SIN LACTOSA',
          'ITALIANAS',
          'MEXICANAS',
          'ASIATICAS',]
          .map((item) => {
            const category_db = new Category();
            category_db.name = item;
            return category_db;
          });

      await Category.save(new_categories);
      logger.warn('Categorias creadas');
    } catch (error) {
      logger.error(error);
    }
  }
}

export async function createCommunities() {
  const communities = await Community.find();

  if (communities.length === 0) {
    try {
      const new_communities = [{
        name: 'Comunidad de Cocina',
        description: 'Comunidad de cocina para compartir recetas',
      },
      {
        name: 'Comunidad China',
        description: 'Comunidad de cocina china',
      },
      {
        name: 'Comunidad Italiana',
        description: 'Comunidad de cocina italiana',
      },
      {
        name: 'Comunidad Mexicana',
        description: 'Comunidad de cocina mexicana',
      }];

      const newCommunities = new_communities.map(async (item) => {
        const community_db = new Community();
        community_db.name = item.name;
        community_db.description = item.description;
        await community_db.save();
        //return community_db;
      });
      await Promise.all(newCommunities);
      logger.warn('Comunidades creadas');
    } catch (error) {
      logger.error(error);

    }
  }
}

export async function createUnits() {
  const units = await Unit.find();

  if (units.length === 0) {
    try {
      const new_units = [
        'Kilogramos',
        'Gramos',
        'Litros',
        'Mililitros',
        'Cucharadas',
        'Cucharaditas',
        'Tazas',
      ].map((item) => {
        const unit_db = new Unit();
        unit_db.name = item;
        return unit_db;
      });

      await Unit.save(new_units);
      logger.warn('Unidades creadas');

    } catch (error) {
      logger.error(error);
    }
  }
}