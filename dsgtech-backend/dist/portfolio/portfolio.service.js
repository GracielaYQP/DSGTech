"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
let PortfolioService = class PortfolioService {
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
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)()
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map