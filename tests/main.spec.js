describe('Main', () => {
  // roda uma vez, antes do bloco
  before(function() {
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(function() {
    console.log('after');
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(function() {
    console.log('beforeEach');
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(function() {
    console.log('afterEach');
  });

  it('test 1', function() {
    console.log('Teste 1');
  });

  it('test 2', function() {
    console.log('Teste 2');
  });
});

// before
// beforeEach
// Teste 1
// afterEach
// beforeEach
// Teste 2
// afterEach
// after
