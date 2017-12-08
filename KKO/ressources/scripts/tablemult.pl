##perl
##4
##input number, return multiplication table of enter number
##1
##../img/perl_mult1.png

use strict;

use warnings;

print "Entrez un nombre: ";

my $nb = <>;
chomp $nb;

for (1..10){
  print "$nb x $_ = " . $nb * $_ . "\n";
}
