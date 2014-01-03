# Ruby in the browser

This is a collection of demos of what you can currently do in the area of using
ruby as the scripting language of the browser. As a replacement, kinda, of
javascript if you will.

This is an area where a lot of people have done a lot of work over the years and
one where we will probably end up having binary modules for our browsers to run
whatever scripting language we want in the end.

Sadly that's still a long ways off and here is what you can do for now:



## What you really want (but can only use for embeded applications)

What we really want is to use Ruby just like we use Javascript today and you can
. Head over to http://trydecaf.org/ and enjoy the bliss!

But since this requires you to download another browser it's only really viable
when you deliver your product as a desktop app ...

There are also some work on building a native code extension for Chrome of the
Ruby runtime. I have not seen it available in any other form than code, so I
haven't tried it. It's a bit better than Decaf if it get's into the app store,
it means you can use it for backend type apps without much problem.



## What we got so far (and it's pretty awesome!)

So no full replacement of Javascript any time soon then? Well, nearly. There are
two other approaches to this problem:

### Ruby VM in Javascript

The traditional approach here is to use LLVM/Clang to compile the Ruby source to
LLVM bytecode and convert that to Javascript.

Currently we have the full (almost) port of Ruby 1.8.7 that Replit did
(https://github.com/replit/emscripted-ruby). But that is 2 years old at the time
of writing and never mind 1.9.x we have 2.1 comming any day so it's a bit dated.

Enter the work that Matz(tm) is doing with mRuby and the similar convertion of
that through LLVM/Clang called Webruby (https://github.com/xxuejie/webruby).

That project is updated and activly worked on and compatible with a large part
of the Ruby ISO standard.

You can look at that code under the `webruby` directory.

### Ruby runtime implemented in Javascript

This is where Opal (http://opaljs.org) comes in. This is a two part project that
consists of a Ruby parser/converter and a Javascript runtime for that.

Basically it takes Ruby source code and transforms it to Javascript, making a
few assuptions along the way.

These assuptions are then delivered by the Opal Ruby runtime that is basically
reimplementing Ruby core and stdlib in Javascript.


## Face off

Well, it depends...

Webruby is larger (but not by a huge factor) and slower (it's a full VM on top
of another VM) but supports ISO Ruby better.

Opal is a bit smaller and a lot faster. It also integrates better with
Javascript (see the opal-jquery plugin) but it isn't really Ruby, it's close but
not quite.

What do I mean? Well it uses Javascripts data types to it's using `Boolean`
instead of `TrueClass`/`FalseClass` and throws around a bit of `null` and
`undefined` at times.

That said it's close enough and probably easier to live with in a mixed Ruby/
Javascript project, like most are bound to be.

## After ever after

I'll add more tests and play around a bit more with real website programming and
we'll see what wins out in the end...

# Help

Do you know of any other way of running Ruby in the browser without any binary
dependancies? Fork nad add code for it as well or just open an issue and I'll
add it as soon as possible.

Many thanks for your time and I hope you enjoy the simple demos I have put
together to show what you can do with Ruby in the browser!