##perl
##4
##hum... x*x
##3
##../img/perl_mult3.png

use strict;

use warnings;

print "Entrez un nombre: ";

my $nb = <>;
chomp $nb;

for (1..10){
  print "$nb x $_ = " . $nb * $_ . "\n";
}
