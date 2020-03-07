# Cryptography

Recently, I have been learning more about data privacy. For the past few years, I couldn't really have cared less who or what was tracking my online presence. Until I read this quote from Edward Snowden that entirely changed my perspective. 

> Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say.

Reading this quote, instantly inspired me to taking basic precautions around data online.

I started using [Brave Browser](https://brave.com/privacy/), switched to [Duck Duck Go](https://duckduckgo.com), and stopped using many social media.

Along with this, I began learning more about [cryptography](https://en.wikipedia.org/wiki/Cryptography). I found it fascinating. 

While there are many algorithms for encryption and decryption, I learned about Public / Private key encryption.

Before learning the key insight behind it or how it works. It's fun to try a little puzzle:

>Imagine Alice is on Island A and Bob is on Island B, and Alice is trying to send Bob a secret message. There is a cargo ship that goes between the two islands which is how Alice will send the message to Bob. However, Eve who owns the boat always looks inside the cargo, if possible, before delivering it. If there are ever any keys on the boat, Eve will make copies of them. If Alice and Bob each have a set of key and lock pairs how can they send messages between them through the boat without Eve having access?

The puzzle, as you can probably tell, is an abstraction on internet communication where Alice and Bob are two parties trying to exchange information through the internet where there are several eavesdroppers. With there keys and locks however, they can safely send encrypted messages to each other.

A solution that works for this puzzle is also what is known as end-to-end encryption. Alice locks the box with her lock and ships the box with the message inside. Eve cannot open the box, but neither can Bob. Bob places his lock also on the box and ships the box back to Alice. With two locks currently on the box Eve still can't open the box. Alice receives the box and takes off her lock and sends it back. Finally, Bob takes his lock off and now has the open box to read the message.

The actual math behind encryption systems like RSA (Rivest–Shamir–Adleman) is quite interesting as well. The system leverages the fact that computers are good at multiplying numbers but factoring numbers is essentially a brute force operation. [This paper on encryption](https://math.berkeley.edu/~kpmann/encryption.pdf) explains it well.
