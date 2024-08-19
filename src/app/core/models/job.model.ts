import { Company } from "./company.model";

export class Job
{
    public id: number;
    public company: Company;
    public title: string;
    public reference: string;

    constructor(id: number, company: Company, title: string, reference: string) {
        this.id = id;
        this.company = company;
        this.title = title;
        this.reference = reference;
    }
}
