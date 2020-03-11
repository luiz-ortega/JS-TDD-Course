import { expect } from 'chai';
import {
  sum, sub, mult, div,
} from '../src/main';

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 12 when `mult(6,2)`', () => {
      expect(mult(6, 2)).to.be.equal(12);
    });
  });

  describe('Div', () => {
    it('should return 3 when `div(9,3)`', () => {
      expect(div(9, 3)).to.be.equal(3);
    });

    it('should return `não é possivel divisão por zero!` when `div(9,0)`', () => {
      expect(div(9, 0)).to.be.equal('não é possivel divisão por zero!');
    });
  });
});
