import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getProjects(): {
        id: number;
        name: string;
        description: string;
        image: string;
        technologies: string[];
        link: string;
    }[];
}
