// 자식 클래스에 인스턴스화 로직을 위임하는 패턴
// 자식 클래스가 어떤 객체를 생성할지 결정하도록 하는 패턴
interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log('Asking about design patterns!');
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log('Asking about community building!');
  }
}

abstract class HiringManager {
  abstract makeInterviewer(): Interviewer;

  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

// 어떤 자식 클래스든 이를 상속받고 필요한 면접관 제공 가능
class DeveloperManager extends HiringManager {
  makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

const devManager = new DeveloperManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();
