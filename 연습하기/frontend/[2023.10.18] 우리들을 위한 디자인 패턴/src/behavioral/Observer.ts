namespace ObserverPattern {
  interface Observer {
    onJobPosted(job: JobPost): void;
  }

  interface Observable {
    attach(observer: Observer): void;
    addJob(jobPosting: JobPost): void;
  }

  class JobPost {
    constructor(protected title: string) {}

    getTitle(): string {
      return this.title;
    }
  }

  class JobSeeker implements Observer {
    constructor(protected name: string) {}

    onJobPosted(job: JobPost) {
      console.log(`Hi ${this.name}! New job posted: ${job.getTitle()}`);
    }
  }

  class EmploymentAgency implements Observable {
    protected observers: Observer[] = [];

    attach(observer: Observer): void {
      this.observers.push(observer);
    }

    addJob(jobPosting: JobPost): void {
      this.notify(jobPosting);
    }

    notify(jobPosting: JobPost): void {
      this.observers.forEach((observer) => observer.onJobPosted(jobPosting));
    }
  }

  const lucid = new JobSeeker('Lucid');
  const nohack = new JobSeeker('NoHack');

  const jobPostings = new EmploymentAgency();
  jobPostings.attach(lucid);
  jobPostings.attach(nohack);

  jobPostings.addJob(new JobPost('Software Engineer'));
}
