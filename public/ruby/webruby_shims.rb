# get window object
$window = MrubyJs.get_root_object

# Small shim to proxy direct calls via the .call method ...
class JS_Object
	def initialize( obj )
		@obj = obj
	end

	def method_missing( sym, *args )
	  @obj.call( sym, *args )
	end
end

# Global shim to simulate this as window context in Ruby as well ...
def method_missing( sym, *args )
  JS_Object.new( $window.call( sym, *args ) )
end