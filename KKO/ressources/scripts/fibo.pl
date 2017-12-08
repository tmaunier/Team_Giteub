##perl
##1
##return fibonacci's suite from 1 to 16
##1
#../img/perl1_fibo.png


sub fibonacci {
  my $l = shift;
  $l < 3 ? 1 : fibonacci($-1) + fibonacci($l-2)
}

foreach (1..16) {
  print fibonacci($_), ", ";
}
print "..."
