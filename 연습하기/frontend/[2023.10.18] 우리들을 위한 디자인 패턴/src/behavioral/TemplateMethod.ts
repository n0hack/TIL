// 알고리즘이 어떻게 수행될지 정의는 하지만, 구현은 서브클래스에게 위임하는 패턴
namespace TemplateMethod {
  abstract class Builder {
    public build(): void {
      this.test();
      this.lint();
      this.assemble();
      this.deploy();
    }

    abstract test(): void;

    abstract lint(): void;

    abstract assemble(): void;

    abstract deploy(): void;
  }

  class AndroidBuilder extends Builder {
    test(): void {
      console.log('Running android tests');
    }

    lint(): void {
      console.log('Linting the android code');
    }

    assemble(): void {
      console.log('Assembling the android build');
    }

    deploy(): void {
      console.log('Deploying android build to server');
    }
  }

  class IosBuilder extends Builder {
    test(): void {
      console.log('Running ios tests');
    }

    lint(): void {
      console.log('Linting the ios code');
    }

    assemble(): void {
      console.log('Assembling the ios build');
    }

    deploy(): void {
      console.log('Deploying ios build to server');
    }
  }

  const androidBuilder = new AndroidBuilder();
  androidBuilder.build();

  const iosBuilder = new IosBuilder();
  iosBuilder.build();
}
