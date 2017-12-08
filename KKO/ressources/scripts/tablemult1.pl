##perl
##4
##input a number, return division table of enter number
##2
##../img/perl_mult2.png

use strict;

use warnings;

print "Entrez un nombre: ";

my $nb = <>;
chomp $nb;
for (1..10){
  print "$nb x $_ = " . $nb * $_ . "\n";
}
