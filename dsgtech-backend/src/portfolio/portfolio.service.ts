import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  getProjects() {
    return [
      {
        id: 1,
        name: 'Proyecto de Ejemplo 1',
        description: 'Este es el primer proyecto de ejemplo en tu portafolio.',
        image: 'https://placehold.co/400x300/E0E0E0/333333?text=DSGTech+Project+1',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
        link: '#',
      },
      {
        id: 2,
        name: 'Proyecto de Ejemplo 2',
        description: 'Una aplicación web moderna y responsiva.',
        image: 'https://placehold.co/400x300/F5F5F5/333333?text=DSGTech+Project+2',
        technologies: ['React', 'JavaScript', 'Node.js'],
        link: '#',
      },
    ];
  }
}