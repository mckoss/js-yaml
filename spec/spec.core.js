
describe 'yaml'
  describe '.version'
    it 'should be a triplet'
      yaml.version.should.match(/^\d+\.\d+\.\d+$/)
    end
  end
  
  describe 'int'
    it 'should convert to a number'
      var doc = yaml.eval('1')
      doc.should.eql 1
    end
  end
  
  describe '"string"'
    it 'should convert to a string'
      var doc = yaml.eval('"foo"')
      doc.should.eql 'foo'
    end
  end
  
  describe '-'
    it 'should convert to an array'
      var doc = yaml.eval('- 1  \n- 2\n- 3\n')
      doc.should.eql [1,2,3]
    end
  end
  
  describe 'key: val'
    it 'should convert to an object'
      var doc = yaml.eval('a: 1\nb: 2\n')
      doc.should.eql { a: 1, b: 2 }
    end
  end
end