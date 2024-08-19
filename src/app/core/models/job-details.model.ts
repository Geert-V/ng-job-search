import { Company } from "./company.model";

export class JobDetails
{
    public id: number;
    public company: Company;
    public title: string;
    public reference: string;
    public location: string;
    public industries: string[];
    public types: string[];
    public description: string;
    public publishDate: Date;

    constructor(id: number, company: Company, title: string, reference: string, location: string, industries: string[], types: string[], description: string, publishDate: Date) {
        this.id = id;
        this.company = company;
        this.title = title;
        this.reference = reference;
        this.location = location;
        this.industries = industries;
        this.types = types;
        this.description = description;
        this.publishDate = publishDate;
    }
}
